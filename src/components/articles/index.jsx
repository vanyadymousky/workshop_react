import Article from './article'

class Articles extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            articles: []
        }
    }

    componentWillMount() {
        fetch('//localhost:3000/articles/')
            .then(res => res.json())
            .then(data => this.setState({
                articles: data
            }))
    }

    render() {
        return <div>
            <table>
                <thead>
                    <th>Title</th>
                    <th>Author</th>
                </thead>
                <tbody>
                    {this.state.articles.map(article => <Article {...article} />)}
                </tbody>
            </table>

        </div>
    }
}

export default Articles
