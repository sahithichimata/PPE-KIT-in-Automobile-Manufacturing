from ultralytics import YOLO
import cv2
import cvzone
import os
import time

# Define colors for each violation
violation_colors = {
    "NO-Hardhat": (0, 0, 255),  # Red
    "NO-Mask": (0, 255, 255),   # Yellow
    "NO-Safety Vest": (255, 0, 0),  # Blue
    "NO-Gloves": (255, 165, 0)  # Orange
}

# Path to save captured images of violations
violations_dir = "violations"
os.makedirs(violations_dir, exist_ok=True)

# Load the YOLO model
model = YOLO("/Users/sahithichimata/Downloads/PPE_detection_Kit-main/best.pt")
classNames = [
    'Hardhat', 'Mask', 'NO-Hardhat', 'NO-Mask', 'NO-Safety Vest', 'NO-Gloves', 
    'Person', 'Safety Cone', 'Safety Vest', 'machinery', 'vehicle','Gloves'
]

def draw_violations(img, boxes, classNames, captured_violations):
    """Draw bounding boxes, labels, and handle violations."""
    for box in boxes:
        x1, y1, x2, y2 = map(int, box.xyxy[0])
        w, h = x2 - x1, y2 - y1
        conf = round(float(box.conf[0]), 2)  # Convert tensor to float before rounding
        cls = int(box.cls[0])

        # Capture and save violation image
        if classNames[cls] in violation_colors:
            cropped_img = img[y1:y2, x1:x2]
            timestamp = int(time.time())
            violation_path = os.path.join(violations_dir, f"{classNames[cls]}_{timestamp}.jpg")
            cv2.imwrite(violation_path, cropped_img)

            # Store the captured violation image for display
            captured_violations.append((cropped_img, classNames[cls]))
            if len(captured_violations) > 5:  # Limit to 5 recent violations
                captured_violations.pop(0)

        # Draw bounding box and label
        color = violation_colors.get(classNames[cls], (255, 255, 255))  # Default to white
        cvzone.cornerRect(img, (x1, y1, w, h), colorR=color)
        cvzone.putTextRect(img, f'{classNames[cls]} {conf}', (x1, y1 - 10), scale=1, thickness=1, colorB=color)

    return img

def display_violations(img, captured_violations):
    """Display captured violation images vertically on the right side."""
    x_offset = img.shape[1] - 110
    y_offset = 50
    for violation_img, label in captured_violations:
        resized_img = cv2.resize(violation_img, (100, 100))
        img[y_offset:y_offset+100, x_offset:x_offset+100] = resized_img
        cv2.putText(img, label, (x_offset, y_offset + 120), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 1)
        y_offset += 140
        if y_offset + 100 > img.shape[0]:
            break
    return img

def process_video(video_source):
    """Process video frames to detect violations."""
    cap = cv2.VideoCapture(video_source)
    captured_violations = []

    while True:
        success, img = cap.read()
        if not success:
            break

        results = model(img, stream=True)

        for r in results:
            img = draw_violations(img, r.boxes, classNames, captured_violations)

        # Display captured violation images
        img = display_violations(img, captured_violations)

        cv2.imshow("PPE Detection", img)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

def main():
    """Main logic to choose input source."""
    print("Choose input source:")
    print("1. Camera")
    print("2. Video File")
    choice = input("Enter 1 or 2: ")

    if choice == "1":
        process_video(0)  # Use camera
    elif choice == "2":
        video_path = input("Enter the path to the video file: ")
        if os.path.exists(video_path):
            process_video(video_path)  # Use video file
        else:
            print("Invalid video path. Please try again.")
    else:
        print("Invalid choice. Please enter 1 or 2.")

if __name__ == "__main__":
    main()
