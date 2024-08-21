import React from 'react';
import './ViewPatient.css';

const ViewPatient = () => {
  return (
    <div className="view-patient-container">
      <header className="header">
        <button className="back-button">← View patient</button>
        <div className="profile-picture"></div>
      </header>
      
      <section className="profile-details">
        <h2>S.Meena, F/23</h2>
        <p>Patient ID: 87 20200727153457</p>
        <div className="goal-container">
          <div className="goal">
            <p>Goal reached</p>
            <div className="goal-percentage">
              <div className="semi-circle">
                <span>40%</span>
              </div>
              <div className="goal-icons">
                <span className="emg">EMG</span>
                <span className="rom">ROM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-info">
          <p><strong>Phone no.:</strong> 8022334455</p>
          <p><strong>Mail ID:</strong> meenarahnasim2@gmail.com</p>
          <p><strong>Affected side:</strong> Bilateral</p>
          <p><strong>Condition:</strong> Ortho</p>
          <p><strong>Speciality:</strong> Osteoarthritis</p>
        </div>
      </section>

      <section className="medical-history">
        <p><strong>Medical history:</strong> Hypertension, DM, Hypothyroidism</p>
      </section>
    </div>
  );
};

export default ViewPatient;
