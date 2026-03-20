/**
 * Generic event tracking wrapper for TRIFIT
 * Connects to Google Analytics (gtag) if mapped, otherwise falls back to console.
 */
export const trackLeadEvent = (eventName, eventData = {}) => {
    try {
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', eventName, eventData);
        }
        // Dev log
        if (process.env.NODE_ENV !== 'production') {
            console.log(`[Analytics] Tracked Lead Event: ${eventName}`, eventData);
        }
    } catch (err) {
        console.error('Failed to track event:', err);
    }
}
