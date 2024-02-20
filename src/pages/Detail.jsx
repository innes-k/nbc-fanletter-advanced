import Avatar from "components/common/Avatar";
import Button from "components/common/Button";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getFormattedDate } from "util/date";
import { useSelector, useDispatch } from "react-redux";
import { removeLetter, editLetter } from "redux/modules/lettersSlice";
import { deleteLetter } from "apis/letters";

export default function Detail() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState("");
  const [foundLetter, setFoundLetter] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const letters = useSelector((state) => state.letters);

  // 홈에서 클릭한 letter 찾기
  useEffect(() => {
    const selectedLetter = letters.find((letter) => letter.id === id);
    setFoundLetter(selectedLetter);
  }, [id, letters]);

  // letter 삭제해서 없으면 return null
  if (!foundLetter) return null;

  const { avatar, nickname, createdAt, writedTo, content } = foundLetter;

  // 삭제버튼 클릭
  const onDeleteBtn = async () => {
    const answer = window.confirm("정말로 삭제하시겠습니까?");
    if (!answer) return;
    else {
      await deleteLetter(id);
      dispatch(removeLetter(id));
      navigate("/");
    }
  };

  // 수정버튼 클릭
  const onEditDone = () => {
    if (!editingText) return alert("수정사항이 없습니다.");

    dispatch(editLetter({ id, editingText }));
    setIsEditing(false);
    setEditingText("");
  };
  return (
    <Container>
      <Link to="/">
        <HomeBtn>
          <Button text="홈으로" />
        </HomeBtn>
      </Link>

      <DetailWrapper>
        <UserInfo>
          <AvatarAndNickname>
            <Avatar src={avatar} size="large" />
            <Nickname>{nickname}</Nickname>
          </AvatarAndNickname>
          <time>{getFormattedDate(createdAt)}</time>
        </UserInfo>
        <ToMember>To: {writedTo}</ToMember>
        {/* 아래 버튼들은 컴포넌트로 분리, 로컬스토리지 토큰과 letter의 토큰이 같으면 버튼컴포넌트 보여주기 */}
        {isEditing ? (
          <>
            <Textarea
              autoFocus
              defaultValue={content}
              onChange={(event) => setEditingText(event.target.value)}
            />
            <BtnsWrapper>
              <Button text="취소" onClick={() => setIsEditing(false)} />
              <Button text="수정완료" onClick={onEditDone} />
            </BtnsWrapper>
          </>
        ) : (
          <>
            <Content>{content}</Content>
            <BtnsWrapper>
              <Button text="수정" onClick={() => setIsEditing(true)} />
              <Button text="삭제" onClick={onDeleteBtn} />
            </BtnsWrapper>
          </>
        )}
      </DetailWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const HomeBtn = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const DetailWrapper = styled.section`
  background-color: gray;
  color: white;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 700px;
  min-height: 400px;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AvatarAndNickname = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Nickname = styled.span`
  font-size: 32px;
`;

const ToMember = styled.span`
  font-size: 24px;
`;

const Content = styled.p`
  font-size: 24px;
  line-height: 30px;
  padding: 12px;
  background-color: black;
  border-radius: 12px;
  height: 200px;
`;

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const Textarea = styled.textarea`
  font-size: 24px;
  line-height: 30px;
  padding: 12px;
  background-color: black;
  border-radius: 12px;
  height: 200px;
  resize: none;
  color: white;
`;
