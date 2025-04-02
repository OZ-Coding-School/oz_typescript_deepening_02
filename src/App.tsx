/* ***************************************************
 * 이 과제는 쇼핑 아이템 목록을 관리하는 애플리케이션을 구현하는 과제입니다.
 *
 * 요구사항:
 * 1. `types/ShoppingItem.ts`에서 `Category` 열거형과 `ShoppingItem` 인터페이스를 정의하세요.
 * 2. `useState` 훅을 사용하여 상태를 정의할 때 타입을 명시하세요.
 * 3. `currentFilter` 값에 따라 아이템을 필터링하고, 필터링된 결과를 `filteredItems` 상태에 저장하세요.
 * 4. 장바구니와 위시리스트 간 아이템 상태를 토글하는 기능을 구현하세요.
 * 5. 필터 UI 구현 및, 필터 버튼 클릭 시 `currentFilter` 값이 변경되고, `filteredItems`가 업데이트되도록 하세요.
 * 6. `filteredItems` 상태를 기반으로 아이템 리스트를 렌더링하고, 각 아이템에 대해 담기 버튼을 구현하세요.
 ****************************************************/

import "./App.css";

import { Category, ShoppingItem } from "./types/ShoppingItem";
import { useEffect, useState } from "react";

function App() {
  /****************************************************
   * [문제 1] useState 훅을 사용하여 상태를 정의
   * allItems와 filteredItems의 타입은 타입파일에서 불러옵니다.
   * currentFilter은 유니온 타입으로 설정합니다.
   ****************************************************/
  const [allItems, setAllItems] = useState([]); // 더미 데이터를 받을 상태
  const [filteredItems, setFilteredItems] = useState([]); // 필터링된 아이템 상태
  const [currentFilter, setCurrentFilter] = useState("all"); // 필터 상태

  // 더미 데이터 불러오기
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data: ShoppingItem[]) => setAllItems(data)); // 데이터 초기화
  }, []);

  /****************************************************
   * [문제 2] 필터링 구현
   * currentFilter 값에 따라 아이템을 필터링하고,
   * 필터링된 결과를 filteredItems 상태에 저장하세요.
   * 필터링 후, setFilteredItems(filtered)로 상태 업데이트하세요.
   * !배열을 필터링할 때 타입을 정확하게 명시하세요.
   ****************************************************/
  useEffect(() => {}, []);

  /****************************************************
   * [문제 3] 상태 토글 구현
   * 아이템을 장바구니에 담거나 빼는 기능을 구현하세요.
   * 상태 토글을 최적화하여 불필요한 렌더링을 방지하세요.
   * 상태 토글 시 setAllItems을 사용하여 상태를 업데이트하고,
   * "장바구니"와 "위시리스트" 간의 전환을 처리하세요.
   ****************************************************/
  const toggleCart = (id: number) => {};

  return (
    <div className="container">
      <h1 className="title">쇼핑</h1>

      <div className="filterGroup">
        {/****************************************************
         * [문제 4] 필터 UI 구현
         * 필터 버튼을 클릭하면 currentFilter 값이 변경되고,
         * 변경된 필터에 따라 filteredItems가 업데이트 되어야 합니다.
         * 필터 클릭 시 currentFilter 업데이트되어야 합니다.
         ****************************************************/}
      </div>

      <ul className="list">
        {/****************************************************
         * [문제 5] 아이템 리스트 렌더링
         * filteredItems 상태에 있는 아이템을 리스트로 렌더링하세요.
         * 아이템의 카테고리와 가격을 표시하고, 담기 버튼을 구현하세요.
         * Category 열거형을 활용하여 카테고리 표시합니다.
         ****************************************************/}
      </ul>
    </div>
  );
}

export default App;
