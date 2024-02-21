import { editProfileInfo, getLoggedInUserInfo } from "apis/users";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser } from "redux/modules/authSlice";
import styled from "styled-components";

function Profile() {
  const dispatch = useDispatch();

  // 새로고침시 토큰, 유저정보를 다시 dispatch로 전달
  useEffect(() => {
    const fetch = async () => {
      const accessToken = localStorage.getItem("loggedInUserToken");
      if (!accessToken) {
        return;
      }
      const loggedInUserInfo = await getLoggedInUserInfo(accessToken);

      dispatch(addUser({ loggedInUserInfo, accessToken }));
    };
    fetch();
  }, [dispatch]);

  // 유저정보 가져오기
  const { accessToken, id, avatar, nickname } = useSelector(
    (state) => state.userInfoReducer
  );

  const [isEdited, setIsEdited] = useState(false);
  const [newNickname, setNewNickname] = useState(nickname);
  // PATCH로 전달하기위한 newAvatar
  const [newAvatar, setNewAvatar] = useState(avatar);
  // 미리보기 위한 previewAvatar
  const [previewAvatar, setPreviewAvatar] = useState(avatar);
  // 업로드한 파일 임시저장 위한 avatarFile
  const [avatarFile, setAvatarFile] = useState(null);

  // 닉네임 수정
  const onEditNickname = (e) => {
    setNewNickname(e.target.value);
  };

  // 수정하기 - 취소 버튼 변환 handler
  const editBtnHandler = () => {
    setIsEdited(!isEdited);
  };

  // 이미지파일 preview
  const onImageHandler = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setPreviewAvatar(imageUrl);
    setAvatarFile(file);
  };

  // 수정완료 버튼 클릭
  const editConfirmHandler = async () => {
    if (window.confirm("이대로 수정하시겠습니까?")) {
      // // 서버에 PATCH 요청
      // previewAvatar && setNewAvatar(avatarFile);
      // await editProfileInfo(newNickname, newAvatar, accessToken);

      if (avatarFile) {
        await editProfileInfo(newNickname, avatarFile, accessToken);
        setNewAvatar(avatarFile);
      }

      // userInfoReducer 리듀서 state 변경
      dispatch(editUser({ newNickname, newAvatar }));
      setIsEdited(!isEdited);
    }
  };

  return (
    <StContainer>
      <StProfileBox>
        <StH1>프로필 관리</StH1>
        {isEdited === false && (
          <>
            <StProfileImg src={newAvatar} alt="" />
            <StH2>{newNickname}</StH2>
            <StH3>{id}</StH3>
            <button onClick={editBtnHandler}>수정하기</button>
          </>
        )}
        {isEdited === true && (
          <>
            <label htmlFor="fileInput">
              <StProfileImg src={previewAvatar} alt="" />
            </label>
            <input
              id="fileInput"
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={onImageHandler}
              style={{ display: "none" }}
              // style={{ position: "absolute", left: "-9999px" }}
            />
            <input type="text" value={newNickname} onChange={onEditNickname} />
            <StH3>{id}</StH3>
            <StEditConfirmBtns>
              <button onClick={editBtnHandler}>취소</button>
              <button onClick={editConfirmHandler}>수정완료</button>
            </StEditConfirmBtns>
          </>
        )}

        {/* <StProfileImg src={newAvatar} alt="" />
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={onImageHandler}
        />
        {!isEdited ? (
          <StH2>{newNickname}</StH2>
        ) : (
          <input
            type="text"
            value={newNickname}
            onChange={onEditNickname}
            style={{ display: "none" }}
          />
        )}
        <StH3>{id}</StH3>
        {!isEdited ? (
          <button onClick={editBtnHandler}>수정하기</button>
        ) : (
          <StEditConfirmBtns>
            <button onClick={editBtnHandler}>취소</button>
            <button onClick={editConfirmHandler}>수정완료</button>
          </StEditConfirmBtns>
        )} */}
      </StProfileBox>
    </StContainer>
  );
}

export default Profile;

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-color: #d2d2d2;
  border-radius: 2rem;
  padding: 20px;
  width: 500px;
  height: 300px;
`;

const StH1 = styled.p`
  font-size: 30px;
  font-weight: 500;
`;

const StProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

const StH2 = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

const StH3 = styled.p`
  color: gray;
  font-size: 20px;
  font-weight: 400;
`;

const StEditConfirmBtns = styled.div`
  display: flex;
  gap: 10px;
`;
