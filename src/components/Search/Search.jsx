import { Form, Input, Wrap } from "./Search.styled";
import search from "../../Images/Svg/search.svg"

const Search = () => {

    return (
        <Wrap>
            <Form>
            <img src={search}
                style={{
                position: 'absolute',
                left: '18px',
                top: '14px',
            }}
           alt="Search"
                width="20"
                height="20"/>
            <Input type='text'
                placeholder='Search for minimalist chair'/>
        </Form>
        </Wrap>
        
    )
}

export default Search;