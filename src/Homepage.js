import React from 'react';
import { useState } from 'react';

const Homepage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [claimedMilestones, setClaimedMilestones] = useState([]);
  const totalSteps = 28;
  const milestones = [7, 14, 21, 28];

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleClaimMilestone = (milestoneIndex) => {
    if (!claimedMilestones.includes(milestoneIndex) && currentStep >= milestones[milestoneIndex]) {
      setClaimedMilestones([...claimedMilestones, milestoneIndex]);
    }
  };

  const handleClaimAll = () => {
    const unclaimedMilestones = milestones
      .map((_, index) => index)
      .filter(index => !claimedMilestones.includes(index) && currentStep >= milestones[index]);
    setClaimedMilestones([...claimedMilestones, ...unclaimedMilestones]);
    setCurrentStep(0);
  };

  const getMilestoneForStep = (step) => {
    if (step <= 7) return 0;
    if (step <= 14) return 1;
    if (step <= 21) return 2;
    return 3;
  };

  const getBoatPosition = () => {
    if (currentStep === 0) return 5;
    
    // Calculate position with better centering at milestones
    const currentMilestone = getMilestoneForStep(currentStep);
    const milestoneStart = currentMilestone === 0 ? 0 : milestones[currentMilestone - 1];
    const milestoneEnd = milestones[currentMilestone];
    const progressInSegment = (currentStep - milestoneStart) / (milestoneEnd - milestoneStart);
    
    // Position at milestone centers: 20%, 40%, 60%, 80%
    const milestonePositions = [20, 40, 60, 80];
    const startPos = currentMilestone === 0 ? 5 : milestonePositions[currentMilestone - 1];
    const endPos = milestonePositions[currentMilestone];
    
    return startPos + (endPos - startPos) * progressInSegment;
  };

  const getFootstepPositions = () => {
    const positions = [];
    for (let step = 1; step <= currentStep; step++) {
      if (step === 0) continue;
      
      const stepMilestone = getMilestoneForStep(step);
      const milestoneStart = stepMilestone === 0 ? 0 : milestones[stepMilestone - 1];
      const milestoneEnd = milestones[stepMilestone];
      const progressInSegment = (step - milestoneStart) / (milestoneEnd - milestoneStart);
      
      const milestonePositions = [20, 40, 60, 80];
      const startPos = stepMilestone === 0 ? 5 : milestonePositions[stepMilestone - 1];
      const endPos = milestonePositions[stepMilestone];
      
      const position = startPos + (endPos - startPos) * progressInSegment;
      positions.push({ step, position });
    }
    return positions;
  };


  const getMilestoneStatus = (milestoneIndex) => {
    const milestone = milestones[milestoneIndex];
    if (claimedMilestones.includes(milestoneIndex)) return 'claimed';
    if (currentStep >= milestone) return 'ready';
    return 'locked';
  };

  const hasUnclaimedRewards = () => {
    return milestones.some((milestone, index) => 
      currentStep >= milestone && !claimedMilestones.includes(index)
    );
  };

  const getPreviousMilestone = () => {
    const currentMilestone = getMilestoneForStep(currentStep);
    if (currentMilestone === 0) return 0;
    return milestones[currentMilestone - 1];
  };

  const handleResetToMilestone = () => {
    const previousMilestone = getPreviousMilestone();
    setCurrentStep(previousMilestone);
  };

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(180deg, #e8f4fd 0%, #b8e0ff 100%)',
      minHeight: '100vh'
    }}>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateX(-50%) scale(0.5);
            }
            to {
              opacity: 0.7;
              transform: translateX(-50%) scale(1);
            }
          }
        `}
      </style>
      {/* Header */}
      <div style={{ marginBottom: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ margin: 0, color: '#2c5aa0', fontSize: '24px', fontWeight: 'bold' }}>
              Daily check in challenge
            </h2>
            <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>
              Reset daily at 00:00 (UTC +7)
            </p>
            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
              Check in for <strong>28 consecutive days</strong> to earn rewards. If you miss a day, progress resets to last milestone.
            </p>
          </div>
          <button 
            style={{
              background: '#e0e0e0',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '20px',
              color: '#999',
              fontSize: '14px',
              cursor: 'not-allowed'
            }}
            disabled
          >
            Claimed
          </button>
        </div>
      </div>

      {/* Progress Container */}
      <div style={{ 
        position: 'relative',
        height: '300px',
        background: 'linear-gradient(180deg, #87ceeb 0%, #4682b4 100%)',
        borderRadius: '20px',
        overflow: 'hidden',
        padding: '20px'
      }}>
        {/* Water waves effect */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          background: 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)',
          borderRadius: '50%',
          transform: 'translateY(30px)'
        }} />

        {/* Islands/Milestones */}
        {milestones.map((milestone, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              bottom: '40px',
              left: `${(index + 1) * 20}%`,
              transform: 'translateX(-50%)',
              textAlign: 'center'
            }}
          >
            {/* Island */}
            <div style={{
              width: '80px',
              height: '40px',
              background: '#8B4513',
              borderRadius: '50%',
              position: 'relative',
              marginBottom: '10px'
            }}>
              {/* Palm trees or treasure */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '24px'
              }}>
                {index === 0 && '🌴'}
                {index === 1 && '⛵'}
                {index === 2 && '🏴‍☠️'}
                {index === 3 && '🏝️🌴'}
              </div>
            </div>

            {/* Milestone indicator */}
            <div style={{
              background: getMilestoneStatus(index) === 'claimed' ? '#4CAF50' : 
                         getMilestoneStatus(index) === 'ready' ? '#FF9800' : '#ccc',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: 'bold',
              marginBottom: '5px',
              cursor: getMilestoneStatus(index) === 'ready' ? 'pointer' : 'default'
            }}
            onClick={() => getMilestoneStatus(index) === 'ready' && handleClaimMilestone(index)}
            >
              {getMilestoneStatus(index) === 'claimed' ? '✓' : milestone} days
            </div>

            {/* Reward icons */}
            <div style={{ fontSize: '20px' }}>
              {index === 0 && '💎'}
              {index === 1 && '⭐'}
              {index === 2 && '👑'}
              {index === 3 && '🎯💰'}
            </div>
          </div>
        ))}

        {/* Footsteps trail */}
        {getFootstepPositions().map((footstep, index) => (
          <div
            key={`footstep-${footstep.step}`}
            style={{
              position: 'absolute',
              bottom: '35px',
              left: `${Math.min(footstep.position, 85)}%`,
              transform: 'translateX(-50%)',
              fontSize: '16px',
              opacity: 0.7,
              zIndex: 5,
              animation: `fadeIn 0.3s ease-in-out ${index * 0.1}s both`
            }}
          >
            👣
          </div>
        ))}

        {/* Boat */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: `${Math.min(getBoatPosition(), 85)}%`,
            transform: 'translateX(-50%)',
            transition: 'all 0.5s ease-in-out',
            fontSize: '30px',
            zIndex: 10
          }}
        >
          🚢
          
          {/* Day counter above boat */}
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 'bold',
            whiteSpace: 'nowrap'
          }}>
            {currentStep} days
          </div>
        </div>

        {/* Claim button */}
        {hasUnclaimedRewards() && (
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px'
          }}>
            <button 
              onClick={currentStep === totalSteps ? handleClaimAll : () => {
                const readyMilestone = milestones.findIndex((_, index) => 
                  getMilestoneStatus(index) === 'ready'
                );
                if (readyMilestone !== -1) handleClaimMilestone(readyMilestone);
              }}
              style={{
                background: '#FF9800',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
            >
              {currentStep === totalSteps ? 'Claim All' : 'Claim'}
            </button>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div style={{ textAlign: 'center', marginTop: '30px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <button
          onClick={handleNextStep}
          disabled={currentStep >= totalSteps}
          style={{
            background: currentStep >= totalSteps ? '#ccc' : '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '25px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: currentStep >= totalSteps ? 'not-allowed' : 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}
        >
          {currentStep >= totalSteps ? 'Journey Complete!' : `Next Step (${currentStep + 1}/28)`}
        </button>
        
        {currentStep > 0 && (
          <button
            onClick={handleResetToMilestone}
            style={{
              background: '#FF5722',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '25px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}
          >
            Reset to Milestone
          </button>
        )}
      </div>

      {/* Progress Info */}
      <div style={{ 
        textAlign: 'center', 
        marginTop: '20px',
        color: '#666',
        fontSize: '14px'
      }}>
        <p>Progress: {currentStep}/{totalSteps} days</p>
        <p>Current milestone: {getMilestoneForStep(currentStep) + 1}/4</p>
      </div>
    </div>
  );
};

export default Homepage;