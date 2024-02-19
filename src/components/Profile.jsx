import { editNickname } from "apis/users";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "redux/modules/authSlice";
import styled from "styled-components";

function Profile() {
  // 유저정보 가져오기
  const { accessToken, id, avatar, nickname } = useSelector(
    (state) => state.userInfoReducer
  );

  const [isEdited, setIsEdited] = useState(false);
  const [newNickname, setNewNickname] = useState(nickname);
  const [newAvatar, setNewAvatar] = useState(avatar);

  // 닉네임 수정
  const onEditNickname = (e) => {
    setNewNickname(e.target.value);
  };

  // 수정하기 - 취소 버튼 변환 handler
  const editBtnHandler = () => {
    setIsEdited(!isEdited);
  };

  // 수정하기 버튼 클릭
  const dispatch = useDispatch();
  const editConfirmHandler = () => {
    if (window.confirm("이대로 수정하시겠습니까?")) {
      setIsEdited(!isEdited);
      editNickname(newNickname, newAvatar, accessToken);
      dispatch(editUser({ newNickname, newAvatar }));
    }
  };

  return (
    <StContainer>
      <StProfileBox>
        <StH1>프로필 관리</StH1>
        <StProfileImg src={newAvatar} alt="" />
        {!isEdited ? (
          <StH2>{newNickname}</StH2>
        ) : (
          <input type="text" value={newNickname} onChange={onEditNickname} />
        )}
        <StH3>{id}</StH3>
        {!isEdited ? (
          <button onClick={editBtnHandler}>수정하기</button>
        ) : (
          <StEditConfirmBtns>
            <button onClick={editBtnHandler}>취소</button>
            <button onClick={editConfirmHandler}>수정완료</button>
          </StEditConfirmBtns>
        )}
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
