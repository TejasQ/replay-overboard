
export const colorways = {
    red: ["#FF7E9F", "#F41C52"],
    green: ["#B6F0A2", "#279C14"],
    blue: ["#8AA9FA", "#3749E7"],
} as const;

export type Colorway = keyof typeof colorways;