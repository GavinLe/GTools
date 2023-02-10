
export const handleIsTauri = ():boolean => {
    return Boolean(
        typeof window !== 'undefined' &&
        window !== undefined &&
        window.__TAURI_IPC__ !== undefined
    );
};