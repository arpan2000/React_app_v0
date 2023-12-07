export function TagButton ({children, onSelect}) {
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}