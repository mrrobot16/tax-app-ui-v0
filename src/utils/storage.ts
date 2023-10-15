export function setUserIdLocalStorage(userId: string): void {
    localStorage.setItem('user_id', userId);
  }

  export function setConversationIdLocalStorage(conversationId: string): void {
    localStorage.setItem('conversation_id', String(conversationId));
  }

  export function getUserIdLocalStorage(): string | null {
    return localStorage.getItem('user_id');
  }

  export function getConversationIdLocalStorage(): string | null {
    return localStorage.getItem('conversation_id');
  }
