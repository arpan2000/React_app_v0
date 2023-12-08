export function TagButton ({children, isSelected, ...props}) {
    return (
        <li>
            <button className = {isSelected ? 'active' : undefined} {...props}>{children}</button>
        </li>
    );
}