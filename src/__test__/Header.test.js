import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

test('Testing Header - Should have App Name as "TODO APP"', async () => {
    render(<Header/>);
    const heading = screen.getByRole('heading')
    expect(heading.textContent).toBe('TODO APP');
})

test('Testing Header - Should Change Text of Theme Changer on clicking', () => {
    render(<Header/>);
    const themeChager = screen.getByTitle('Theme Changer');
    fireEvent.click(themeChager)
    expect(themeChager.textContent).toBe('Light Theme')
})