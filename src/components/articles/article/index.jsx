
class Article extends React.Component {


    render() {
        return <tr>
            <td>
                {this.props.title}
            </td>
            <td>
                {this.props.author}
            </td>
        </tr>
    }
}

export default Article
