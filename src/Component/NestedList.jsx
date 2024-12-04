import React, { useState } from 'react'

const NestedList = ({ data }) => {
  const renderList = (items, level = 1) => {
    if (level > 3) return null;

    return (
      <div>
      <ul style={{ marginLeft: `${level * 20}px`}}>
        {items.map((item) => (
          <NestedItem key={item.id} item={item} level={level} />
        ))}
      </ul>
      </div>
    );
  };

  const NestedItem = ({ item, level }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleClick = () => {
      setIsExpanded(!isExpanded);
    };
    return (
      <li>
        <div style={{ cursor: 'pointer', fontWeight: isExpanded ? 'bold' : 'normal' }}
          onClick={handleClick}>
          {item.name}
        </div>
        {isExpanded && item.children && renderList(item.children, level + 1)}
      </li>
    );
  };
  return (
    <div>
      {renderList(data)}
    </div>
  )
}

export default NestedList;
