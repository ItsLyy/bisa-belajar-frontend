export const formatDate = (timestamps: string) => {
    const date = new Date(timestamps);
    
    const longDay = date.toLocaleDateString('en-US', { weekday: 'long' });
    const shortDay = date.getDate();
    const longMonth = date.toLocaleDateString('en-US', { month: "long" });
    const year = date.getFullYear();

    return `${longDay}, ${shortDay} ${longMonth} ${year}`
}