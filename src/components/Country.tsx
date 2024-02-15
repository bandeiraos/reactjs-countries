import styled from "styled-components";

export interface ICountry {
    name: {
        common: string;
    },
    region: string,
    population: number,
    flags: {
        svg: string,
        alt: string;
    },
    capital: string[];
}

interface CountryProps {
    country: ICountry;
}

const CountryStyled = styled.li`
    margin-bottom: 30px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    border-radius: 4px;
    background-color: ${props => props.theme.elements};
    color: ${props => props.theme.text};
    cursor: pointer;

    .flag {
        img {
            border-top-right-radius: 4px;
            border-top-left-radius: 4px;
            height: 100%;
            width: 100%;
        }
    }

    .info {
        padding: 30px 20px;
        ul {
            margin-top: 20px;

            li {
                margin-bottom: 4px;
            }
        }
    }

    @media screen and (max-width: 500px){
        width: 300px;
    }

`;

const Country = ({ country }: CountryProps) => {
    const { name, region, population, capital, flags } = country;

    return (
        <CountryStyled>
            <div className="flag">
                <img src={flags.svg} alt={flags.alt} />
            </div>
            <div className="info">
                <h2>{name.common}</h2>

                <ul>
                    <li><strong>Population: </strong>{population}</li>
                    <li><strong>Region: </strong>{region}</li>
                    <li><strong>Capital: </strong>{capital}</li>
                </ul>
            </div>
        </CountryStyled>
    );
};

export default Country;