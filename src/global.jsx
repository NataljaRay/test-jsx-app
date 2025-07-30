import './styles'
import { Head } from "minista"

export default (props) => {
    const {
        children,
        title,
        url,
        bla,
    } = props;

    const navItems = [
        {href: '/test-jsx-app/', label: 'Home'},
        {href: '/test-jsx-app/about', label: 'About'},
        {href: '/test-jsx-app/news', label: 'News'},
    ]

    return (
        <>
            <Head
                htmlAttributes={{ lang: "ru" }}
                bodyAttributes={{ class: "custom-body" }}>

                <title>APP | {title}</title>
                <script src="/src/main.js" type="module"/>
            </Head>
            <header>
                <nav>
                    <ul>
                        {navItems.map(({href, label}, index) => (
                            <li key={index}>
                                <a href={href}
                                    className={href === url ? 'active' : ''}>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            {/*<h1>Home!</h1>*/}
            <main>{children}{bla}</main>
            <footer>FOOTER</footer>
        </>
    )
}
