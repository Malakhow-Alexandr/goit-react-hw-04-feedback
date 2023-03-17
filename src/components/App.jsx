import { useState } from 'react';
import { FeedbackSection } from './Feedback/Section/Section';
import { FeedbackOption } from './Feedback/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Feedback/Statistics/Statistics';
import { NotificationMessage } from './Feedback/NotificationMessage/NotificationMessage';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackIncrement = event => {
    const { name } = event.currentTarget;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        console.log('sorry no such cases');
        break;
    }
  };
  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercent = (good / countTotalFeedback()) * 100;
    return positiveFeedbackPercent;
  };

  return (
    <div
      style={{
        border: '1px solid black',
        borderRadius: '20px',
        margin: 'auto',
        height: 340,
        width: 280,
        padding: 40,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'teal',
        alignItems: 'left',
        fontSize: 15,
        color: '#fff',
        boxShadow: 'rgb(0 0 0 / 50%) 0px 2px 7px',
      }}
    >
      <FeedbackSection title="Please leave feedback">
        <FeedbackOption
          options={['good', 'neutral', 'bad']}
          onClick={handleFeedbackIncrement}
        ></FeedbackOption>
      </FeedbackSection>

      <FeedbackSection title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <NotificationMessage message="There is no feedback"></NotificationMessage>
        )}
      </FeedbackSection>
    </div>
  );
};
