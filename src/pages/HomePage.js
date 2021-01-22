import styled from "styled-components"


const StyledPage = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledStarshipcard = styled.article`
    margin: 15px;
    flex-grow: 1;
    border: 1px solid #000000;
    border-radius: 12px;
`;


export default function HomePage(props){
    return (
        <StyledPage>
            {
                props.sampleStarships.map(starship =>
                    <StyledStarshipcard key={starship.name}>
                        <h1>{starship.name}</h1>
                    </StyledStarshipcard>
                    )
            }
        </StyledPage>
    );
};