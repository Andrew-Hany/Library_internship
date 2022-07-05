import face_recognition
import cv2
import os

global face_number,face_dic,img
face_number=-1
face_dic = {}
def click(event, x,y,flags,param):
    # print(face_dic)
    if event == cv2.EVENT_LBUTTONDOWN:
        for i in range(len(face_dic)):
            (top, bottom, left, right) = face_dic["unknown" + str(i+1)]
            if y in range(top, bottom) and x in range(left, right):
                face_number=i+1
                tag(face_number)
                print(face_number)
                break

def pre_processing(img):
    img=cv2.imread(img)
    #resize
    #this need to think of a way to automate this in a good manner
    resized_img = cv2.resize(img, (1000, 500))

    # cv2.imshow('Window',resized_img)

    return resized_img
def get_faces():
    face_locations = face_recognition.face_locations(img)

    i=1
    print()
    for (top, right, bottom, left) in (face_locations):
        # face_dic["unknown" + str(i)] = img[top:bottom, left:right, :]
        face_dic["unknown" + str(i)] = (top,bottom,left,right)
        # print(face_dic["unknown" + str(i)].shape,(top,bottom,left,right))
        cv2.rectangle(img, (left, top), (right, bottom), (0, 0, 255), 2)
        i += 1
    cv2.imshow('Video', img)
    cv2.setMouseCallback("Video", click)

    cv2.waitKey(0)

    return face_dic
def file_count(dir_path):
    count = 0
    # Iterate directory
    for path in os.listdir(dir_path):
        # check if current path is a file
        if os.path.isfile(os.path.join(dir_path, path)):
            count += 1
    return count
def add_to_dir(name,img):

    fpath='C:/Users/data/PycharmProjects/pythonProject/faces/' + str(name)

    isDirectory = os.path.isdir(fpath)
    if not isDirectory:
        os.mkdir(fpath)
        print(name+" created")

        cv2.imwrite(os.path.join(fpath, name +str(1)+ ".jpg"), img)
    else:

        count = file_count(fpath)
        print(name + str(count + 1) + " added")
        cv2.imwrite(os.path.join(fpath, name + str(count + 1) + ".jpg"), img)



def tag(face_number):

    x=face_number
    (top,bottom,left,right)=face_dic["unknown"+str(x)]

    print("if you this person:")
    print("      write his name")
    print("else:")
    print("      NO")
    name=input(">>")
    cv2.putText(img, name, (left,top), cv2.FONT_HERSHEY_SIMPLEX,
                1, (255, 255, 255), 2, cv2.LINE_AA)
    if name!="NO":
        face_dic[name]=face_dic["unknown" + str(x)]
        img1=img[top:bottom, left:right, :]
        add_to_dir(name, img1)
        print("done")
        # del face_dic["unknown" + str(x)]


    cv2.imshow('Video', img)
    cv2.setMouseCallback("Video", click)

    cv2.waitKey(0)



print("1")
img=pre_processing("2.jpg")
print("2")
face_dic=get_faces()
print("3")
# tag(img)