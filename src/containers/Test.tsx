import { CSSProperties, useState, useEffect, useRef, useCallback } from 'react';
import { AxiosError } from 'axios';

import 'containers/Chat/styles.css';
import { classNames, styles } from 'containers/Chat/styles';
import { ErrorMessage } from 'components';
import { getUser,openAIStatus, apiStatus } from 'services';
import { getUserIdLocalStorage, clearLocalStorage } from 'utils/storage';

const methodDoesNotExist = (): void => {
    throw new Error('Function not implemented.');
};

export function Test() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [codeRed, setCodeRed] = useState(false);
  const hasMounted = useRef(false);

  const setStatusErrorMessages = (error?: string | AxiosError | unknown) => {
    setCodeRed(true);
    setErrorMessage(`
    We apologize for the inconvenience, our system is undergoing maintenance to improve your experience. 
    Thank you for your patience.
    `);
  };

  const checkLocalUserId = useCallback(async () => {
    const userId = getUserIdLocalStorage();

    if(userId) {
        const user = await getUser(userId);
        const conversation = user?.data.conversations[0];

        console.log('user', user);
        console.log('conversation', conversation);
    }
  }, []);

  const checkOpenAIStatus = useCallback(async () => {
    const health = await openAIStatus(setStatusErrorMessages);

    if(health.status === 200) {
      console.log('All good with OpenAI api health: ', health);
    }

    if(health.status === 500 || health.status === 503) {
      setCodeRed(true);
      console.log('Something wrong with OpenAI API health: ', health);

      const message = health.status === 500 ? `
      We apologize for the inconvenience, our system is undergoing scheduled maintenance. 
      Thank you for your patience.
      ` : health.status === 503 ? `
      We apologize for the inconvenience, our app is undergoing scheduled maintenance. 
      Thank you for your patience.
      ` : null;

      setErrorMessage(message);
    }
  }, []);

  const checkAPIStatus = useCallback(async () => {
    const health = await apiStatus();

    if(health.status === 200) {
      console.log('All good with API health: ', health);
    }

    if(health.status === 500) {
      setCodeRed(true);
      console.log('Something wrong with API health: ', health);
      setErrorMessage(`
      We apologize for the inconvenience, our platform is undergoing scheduled maintenance. 
      Thank you for your patience.
      `);
    }
  }, []);

  const componentDidMount = () => {
    if (!hasMounted.current) { // Checking if the component has not mounted
      checkAPIStatus();
      checkOpenAIStatus();
      checkLocalUserId();
      hasMounted.current = true; // Updating the ref value after the initial mount
    }
  };

  useEffect(componentDidMount, [checkOpenAIStatus, checkAPIStatus, checkLocalUserId]);

  return (
    <div className={classNames.container}>
      <h1 className={classNames.title}>Test Stuff Works</h1>
      <main style={styles.main}>
        <div className="SendMessageContainer" style={styles.sendMessageContainer as CSSProperties}>
            <button type="button" onClick={() => methodDoesNotExist()}>Break the world</button>
        </div>

        <div className="SendMessageContainer" style={styles.sendMessageContainer as CSSProperties}>
            <button type="button" onClick={() => clearLocalStorage()}>Clear local storage</button>
        </div>
        { codeRed && <ErrorMessage message={errorMessage} /> }
      </main>
    </div>
  );
}

export default Test;
