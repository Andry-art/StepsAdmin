import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';

const Header = () => {
  const navigate = useNavigate();
  const hendelClick = useCallback(
    (link) => {
      navigate(link);
    },
    [navigate],
  );
  return (
    <>
      <div className="header_container">
        <p className="menu_item" onClick={() => hendelClick('/main')}>
          Дискаунты
        </p>
        <p className="menu_item" onClick={() => hendelClick('/new_discount')}>
          Новый дискаунт
        </p>
      </div>
    </>
  );
};

export default Header;
