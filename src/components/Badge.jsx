import React, { useRef, useState } from 'react';

function Badge({ badgeInfo, editSeverity }) {

  const [rotate, setRotate] = useState(false);

  const handleClick = () => {
    if(badgeInfo.hasSeverity) {
      setRotate(!rotate);
    }
  }
  const handleMouseLeave = () => setRotate(false);
  const handleOptionClick = (severity) => {editSeverity(badgeInfo.name, severity);}

  const severityIconInfo = [
    ["public\\svgs\\severity\\svgg.svg", "no severity"],
    ["public\\svgs\\severity\\badicon.svg", "bad"],
    ["public\\svgs\\severity\\neutralicon.svg", "neutral"],
    ["public\\svgs\\severity\\goodicon.svg", "good"],
  ]

  const Option = ({ severity }) => (
    <div onClick={() => handleOptionClick(severity)} className="option">
      <div style={{}}>
          <img className='test' src={severityIconInfo[severity][0]} alt={badgeInfo.severity} />
      </div>
      <div>{severityIconInfo[severity][1]}</div>
    </div>
  );

  return (
    <div className={badgeInfo.hasSeverity ? "flip-card" : "non-flip-card"} onClick={handleClick} onMouseLeave={handleMouseLeave}>
      <div className={`flip-card-inner ${rotate ? 'rotate' : ''}`}>

        <section className="flip-card-front flip-card-content">
          <div className="image" style={{ backgroundColor: badgeInfo.fill }}>
            <img className='badge-image' src={badgeInfo.path} alt={badgeInfo.severity} />
          </div>
          <h3 className='badge-name'>{badgeInfo.name}</h3>
          <div className='rating-text-container'>
            { badgeInfo.hasSeverity > 0 &&
              <h3 className='rating-text'>Severity:</h3>
            }
            { badgeInfo.severity > 0 &&
              <img className='badge-severity' src={severityIconInfo[badgeInfo.severity][0]} alt={badgeInfo.severity} />
            }
          </div>
        </section>

        <section className="flip-card-back flip-card-content">
          <h3 className='card-back-text'>{badgeInfo.name}</h3>
          <div className="option-menu">
            {[0, 1, 2, 3].map((severity) => (
              <Option key={severity} severity={severity} />
            ))}
          </div>
          
        </section>

      </div>
    </div>
  );
}

export default Badge;
