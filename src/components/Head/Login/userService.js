
export const login = (email, password, remember) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(email, password, remember);
      }, 500);
    });
  };
  
  
  
