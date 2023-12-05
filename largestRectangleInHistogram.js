function largestRectangleArea(heights) {
    // Stack to store indices of histogram bars
    const stack = [];
    let maxArea = 0;

    // Iterate through each bar in the histogram
    for (let i = 0; i <= heights.length; i++) {
        // Current bar's height or 0 for the last bar
        const h = (i < heights.length) ? heights[i] : 0;

        // Check if the current bar's height is less than the height of the bar at the top of the stack
        while (stack.length > 0 && h < heights[stack[stack.length - 1]]) {
            // Pop the index from the stack
            const heightIndex = stack.pop();

            // Calculate the width of the rectangle
            const width = (stack.length === 0) ? i : i - stack[stack.length - 1] - 1;

            // Calculate the area of the rectangle
            const area = heights[heightIndex] * width;

            // Update the maximum area if the current area is larger
            maxArea = Math.max(maxArea, area);
        }

        // Push the current bar's index onto the stack
        stack.push(i);
    }

    return maxArea;
}

// Example usage:
const histogram = [2, 1, 5, 6, 2, 3];
const result = largestRectangleArea(histogram);
console.log(result); // Output: 10
