import { writable } from 'svelte/store';

function createToastStore() {
  const { subscribe, set, update } = writable([]);
  
  let id = 0;
  
  function addToast(message, type = 'default', duration = 5000) {
    const toastId = id++;
    const toast = {
      id: toastId,
      message,
      type,
      duration
    };
    
    update(toasts => [...toasts, toast]);
    
    if (duration > 0) {
      setTimeout(() => {
        removeToast(toastId);
      }, duration);
    }
    
    return toastId;
  }
  
  function removeToast(id) {
    update(toasts => toasts.filter(t => t.id !== id));
  }
  
  return {
    subscribe,
    success: (message, duration) => addToast(message, 'success', duration),
    error: (message, duration) => addToast(message, 'error', duration),
    info: (message, duration) => addToast(message, 'info', duration),
    warning: (message, duration) => addToast(message, 'warning', duration),
    remove: removeToast,
    clear: () => set([])
  };
}

export const toast = createToastStore();