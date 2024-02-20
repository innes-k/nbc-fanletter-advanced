import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import LetterCard from "./LetterCard";
import { useEffect } from "react";
import { getLetters } from "apis/letters";
import { initLetter } from "redux/modules/lettersSlice";

export default function LetterList() {
  const activeMember = useSelector((state) => state.member);
  const letters = useSelector((state) => state.letters);
  const dispatch = useDispatch();

  useEffect(() => {
    // 1. json server에서 letter 최신값 GET
    // 2. 가져온 letter값을 letterSlice에 dispatch
    // -> 화면 리렌더링시 최신 letter를 가져온다 (삭제 후 리렌더링시 오류나서 해결로 생각함)
  }, []);

  useEffect(() => {
    const letters = async () => {
      const data = await getLetters();
      dispatch(initLetter(data));
    };
    letters();
  }, [dispatch]);

  const filteredLetters = letters.filter(
    (letter) => letter.writedTo === activeMember
  );
  return (
    <ListWrapper>
      {filteredLetters.length === 0 ? (
        <p>
          {activeMember}에게 남겨진 팬레터가 없습니다. 첫 번째 팬레터의 주인공이
          되보세요!
        </p>
      ) : (
        filteredLetters.map((letter) => (
          <LetterCard key={letter.id} letter={letter} />
        ))
      )}
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  border-radius: 12px;
  padding: 12px;
  color: white;
`;
