import React, { useState } from 'react';

const MultiSelectDropdown = ({ label, options, selectedOptions, setSelectedOptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (value) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((v) => v !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  return (
    <div className="multi-select-dropdown" style={{ marginBottom: '20px', position: 'relative' }}>
      <label style={{ fontWeight: '600', display: 'block', marginBottom: '8px' }}>{label}</label>
      <div
        className="dropdown-header"
        onClick={toggleDropdown}
        style={{
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '8px',
          cursor: 'pointer',
          userSelect: 'none',
          minHeight: '38px',
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '5px',
          position: 'relative',
          backgroundColor: '#fff',
        }}
      >
        {selectedOptions.length === 0 ? (
          <span style={{ color: '#999' }}>{options[0].text}</span>
        ) : (
          selectedOptions.map((value) => {
            const option = options.find((opt) => opt.value === value);
            return (
              <span
                key={value}
                style={{
                  backgroundColor: '#007bff',
                  color: '#fff',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                {option ? option.text : value}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOptionClick(value);
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#fff',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    lineHeight: '1',
                  }}
                  aria-label={`Remove ${option ? option.text : value}`}
                >
                  &times;
                </button>
              </span>
            );
          })
        )}
        <span style={{ marginLeft: 'auto', fontSize: '16px', userSelect: 'none' }}>
          {isOpen ? '▲' : '▼'}
        </span>
      </div>
      {isOpen && (
        <div
          className="dropdown-list"
          style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginTop: '4px',
            maxHeight: '150px',
            overflowY: 'auto',
            backgroundColor: '#fff',
            position: 'absolute',
            zIndex: 1001,
            width: '100%',
          }}
        >
          {options.map((option) => (
            <label
              key={option.value}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '6px 8px',
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option.value)}
                onChange={() => handleOptionClick(option.value)}
                style={{ marginRight: '8px' }}
              />
              {option.text}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const LearningMaterialPopup = ({ onClose }) => {
  const materialOptions = [
    { text: 'JavaScript', value: 'javascript' },
    { text: 'React', value: 'react' },
  ];

  const preferenceOptions = [
    { text: 'Online', value: 'online' },
    { text: 'In-person', value: 'inperson' },
    { text: 'Self-paced', value: 'selfpaced' },
  ];

  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedPreferences, setSelectedPreferences] = useState([]);

  return (
    <div
      className="learning-material-popup-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        className="learning-material-popup-content"
        style={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          width: '90%',
          maxWidth: '400px',
          padding: '20px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          position: 'relative',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: '#333',
          textAlign: 'center',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'transparent',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#888',
            transition: 'color 0.3s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = '#000')}
          onMouseOut={(e) => (e.currentTarget.style.color = '#888')}
          aria-label="Close popup"
        >
          &times;
        </button>
        <h2 style={{ marginBottom: '15px', fontWeight: '700' }}>Learning Material</h2>
        <form style={{ textAlign: 'left', marginTop: '10px' }}>
          <label htmlFor="contactInfo" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
            Please enter your phone number or email address:
          </label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            placeholder="Phone number or Email"
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '15px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '14px',
            }}
          />
          <MultiSelectDropdown
            label="Please select the material required for learning:"
            options={materialOptions}
            selectedOptions={selectedMaterials}
            setSelectedOptions={setSelectedMaterials}
          />
          <MultiSelectDropdown
            label="Please select your preferences:"
            options={preferenceOptions}
            selectedOptions={selectedPreferences}
            setSelectedOptions={setSelectedPreferences}
          />
        </form>
      </div>
    </div>
  );
};

export default LearningMaterialPopup;
