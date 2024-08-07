import React, { useRef, useState } from 'react';

function Badge({ badgeInfo, editSeverity }) {
  const [rotate, setRotate] = useState(false);
  const flipCardInnerRef = useRef(null);
  const handleClick = () => setRotate(!rotate);
  const handleMouseLeave = () => setRotate(false);
  const handleOptionClick = (severity) => editSeverity(badgeInfo.name, severity);
  const severityIcons = [
    "public\\svgs\\severity\\badicon.svg",
    "public\\svgs\\severity\\neutralicon.svg",
    "public\\svgs\\severity\\goodicon.svg",
  ]

  const Option = ({ severity }) => (
    <div onClick={() => handleOptionClick(severity)} className="option">
      <img className='test' src={severityIcons[severity - 1]} alt={badgeInfo.severity} />
    </div>
  );

  return (
    <div className="flip-card" onClick={handleClick} onMouseLeave={handleMouseLeave}>
      <div className={`flip-card-inner ${rotate ? 'rotate' : ''}`} ref={flipCardInnerRef}>
        <section className="flip-card-front flip-card-content">
          <div className="image" style={{ backgroundColor: badgeInfo.fill }}>
            <img className='badge-image' src={badgeInfo.path} alt={badgeInfo.severity} />
            {badgeInfo.severity > 0 &&
              <img className='badge-severity' src={severityIcons[badgeInfo.severity - 1]} alt={badgeInfo.severity} />
            }
          </div>
          <h3 className='badge-name'>{badgeInfo.name}</h3>
        </section>
        <section className="flip-card-back flip-card-content">
          <h3 className="card-back-text">Rate Me!</h3>
          <div className="option-menu">
            {[1, 2, 3].map((severity) => (
              <Option key={severity} severity={severity} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Badge;
