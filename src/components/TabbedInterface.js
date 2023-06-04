import React, { useState } from 'react';
import './TabbedInterface.css'
function TabbedInterface() {
    const [tabs, setTabs] = useState([{ id: 1, name: 'Tab 1', gender: '', content: '' }]);
    const [activeTab, setActiveTab] = useState(1);

    const addTab = () => {
        if (tabs.length >= 5) {
            return;
        }

        const newTabId = tabs.length + 1;
        const newTab = { id: newTabId, name: `Tab ${newTabId}`, gender: '', content: '' };

        setTabs([...tabs, newTab]);
        setActiveTab(newTabId);
    };

    const removeTab = (tabId) => {
        const filteredTabs = tabs.filter((tab) => tab.id !== tabId);

        setTabs(filteredTabs);

        if (activeTab === tabId) {
            setActiveTab(filteredTabs.length > 0 ? filteredTabs[0].id : null);
        }
    };

    const switchTab = (tabId) => {
        setActiveTab(tabId);
    };

    const handleNameChange = (event) => {
        const updatedTabs = tabs.map((tab) => {
            if (tab.id === activeTab) {
                return { ...tab, name: event.target.value };
            }
            return tab;
        });

        setTabs(updatedTabs);
    };

    const handleGenderChange = (event) => {
        const updatedTabs = tabs.map((tab) => {
            if (tab.id === activeTab) {
                return { ...tab, gender: event.target.value };
            }
            return tab;
        });

        setTabs(updatedTabs);
    };

    const handleTabContentChange = (event) => {
        const updatedTabs = tabs.map((tab) => {
            if (tab.id === activeTab) {
                return { ...tab, content: event.target.value };
            }
            return tab;
        });

        setTabs(updatedTabs);
    };

    return (
        <div>
            <ul className="tab-navigation">
                {tabs.map((tab) => (
                    <li
                        key={tab.id}
                        className={tab.id === activeTab ? 'tab-link active' : 'tab-link'}
                        onClick={() => switchTab(tab.id)}
                    >
                        {tab.name}
                        {tab.id !== 1 && (
                            <span className="tab-close" onClick={() => removeTab(tab.id)}>
                                &times;
                            </span>
                        )}
                    </li>
                ))}
                {tabs.length < 5 && (
                    <li className="add-tab" onClick={addTab}>
                        +
                    </li>
                )}
            </ul>

            <div className="tab-content">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={tab.id === activeTab ? 'tab active' : 'tab '}
                    >


                        {tab.id === activeTab && (
                            <div className="gender-box">
                                <label htmlFor="gender">Gender </label>

                                <select
                                    id="gender"
                                    value={tab.gender}
                                    onChange={handleGenderChange}
                                >

                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        )}
                        {tab.id === activeTab && (
                            <div className="input-container">
                                <label htmlFor="name">Name </label>

                                <input
                                    type="text"
                                    id="name"


                                />
                            </div>

                        )}

                    </div>
                ))}
            </div>
        </div >
    );
}

export default TabbedInterface;
