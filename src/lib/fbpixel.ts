export const FB_PIXEL_ID = "1534370980318317";

// Dispara um evento padrão do Facebook
export const pageview = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).fbq("track", "PageView");
  } else {
    console.warn("Facebook Pixel (PageView) not initialized or window.fbq not available.");
  }
};

// Dispara eventos customizados
export const event = (name: string, options = {}) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    console.log(`Facebook Pixel Event: ${name}`, options); // Added console log
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).fbq("track", name, options);
  } else {
    console.warn(`Facebook Pixel Event: ${name} not fired. window.fbq not available.`);
  }
};
