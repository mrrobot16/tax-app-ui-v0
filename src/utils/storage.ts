export function setUserIdLocalStorage(userId: string): void {
    localStorage.setItem('local_user_id', userId);
  }

  export function setConversationIdLocalStorage(conversationId: string): void {
    localStorage.setItem('local_conversation_id', String(conversationId));
  }

  export function getUserIdLocalStorage(): string | null {
    return localStorage.getItem('local_user_id');
  }

  export function getConversationIdLocalStorage(): string | null {
    return localStorage.getItem('local_conversation_id');
  }

  export function clearLocalStorage(): void {
    localStorage.clear();
    setUserIdLocalStorage('');
    setConversationIdLocalStorage('');
    console.log('Local storage cleared');
  }
