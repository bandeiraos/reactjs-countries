export function formatPopulation(pop: number) {
    return pop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function hasPressedEnter(code: string) {
    return code === "Enter" || code === "NumpadEnter";
}