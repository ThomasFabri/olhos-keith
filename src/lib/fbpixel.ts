export const FB_PIXEL_ID = "1534370980318317";

// Dispara um evento padrão do Facebook
export const pageview = () => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  } else {
    console.warn("Facebook Pixel (PageView) not initialized or window.fbq not available.");
  }
};

// Dispara eventos customizados
export const event = (name: string, options: Record<string, unknown> = {}) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    console.log(`Facebook Pixel Event: ${name}`, options);
    window.fbq("track", name, options);
  } else {
    console.warn(`Facebook Pixel Event: ${name} not fired. window.fbq not available.`);
  }
};
