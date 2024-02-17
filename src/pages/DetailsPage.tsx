import styled from "styled-components";
import { useCountriesContext } from "../context/context";
import { formatPopulation } from "../helpers/helpers";

const BoxShadowStyled = styled.div`
    box-shadow: ${props => props.theme.boxShadow};
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.elements};
    padding: 8px;
    font-size: 14px;
    border-radius: 4px;
`;

const ButtonStyled = styled(BoxShadowStyled).attrs({ as: 'button' })`
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 140px;
    
    &:hover {
        opacity: 0.8;
    }

    svg {
        width: 16px;
        margin-right: 8px;
    }
`;

const DetailsPageStyled = styled.div`
    .detail-content {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        color: ${props => props.theme.text};

        .flag-wrapper {
            max-width: 32vmax;
            width: 100%;
            height: 300px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
        
        .info-wrapper {
            padding-left: 50px;
            flex: 1;
            padding-top: 20px;

            h1 {
                margin-bottom: 20px;
            }

            .info-content {
                flex: 1;
                display: flex;
                justify-content: space-between;
                > div > span {
                    display: block;
                    margin-bottom: 8px;
                }

             }

             .border-wrapper {
                display: flex;
                margin-top: 20px;
                span {
                    margin-right: 12px;
                }

                ul {
                    li {
                        display: inline-block;
                        margin-right: 8px;
                    }
                }
             }
        }
        
    }

    @media screen and (max-width: 1024px) {
        .detail-content {
            flex-direction: column;

            .flag-wrapper {
                height: 180px;
                align-self: center;
            }

            .info-wrapper {
                padding-left: 0;
                .info-content {
                    flex-direction: column;
                    justify-content: unset;

                    > div:last-child {
                        margin-top: 32px;
                    }
                }

                .border-wrapper {
                    flex-direction: column;
                    >span {
                        margin-bottom: 12px;
                    }

                    li {
                        margin-bottom: 4px;
                    }
                }
            }
        }
    }
`;

const DetailsPage = () => {
    const { selectedCountry, handleSelectCountry } = useCountriesContext();
    if (!selectedCountry) return;

    const { name, region, borders, capital, currencies, flags, languages, population, subregion, tld } = selectedCountry;
    const fmtdNativeName = Object.keys(name.nativeName)?.map(nm => name.nativeName[nm].common).join(', ');
    const fmtCurrencies = Object.keys(currencies)?.map(nm => currencies[nm].name).join(', ');
    const fmtLanguages = Object.keys(languages).map(l => languages[l]).join(', ');

    return (
        <DetailsPageStyled>
            <ButtonStyled className="clickable" onClick={() => handleSelectCountry(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>

                Back
            </ButtonStyled>

            <div className="detail-content">
                <div className="flag-wrapper" style={{ backgroundImage: `url(${flags.png})` }} aria-description={flags.alt} />

                <div className="info-wrapper">
                    <h1>{name.common}</h1>

                    <div className="info-content">
                        <div>
                            <span><b>Native name: </b>{fmtdNativeName}</span>
                            <span><b>Population: </b>{formatPopulation(population)}</span>
                            <span><b>Region: </b>{region}</span>
                            <span><b>Sub Region: </b>{subregion}</span>
                            <span><b>Capital: </b>{capital}</span>
                        </div>

                        <div>
                            <span><b>Top Level Domain: </b>{tld}</span>
                            <span><b>Currencies: </b>{fmtCurrencies}</span>
                            <span><b>Languages: </b>{fmtLanguages}</span>
                        </div>
                    </div>

                    {borders && borders.length &&
                        <div className="border-wrapper">
                            <span>
                                <b>Border Countries:</b>
                            </span>
                            <ul>
                                {borders.map((b: string) => (
                                    <li key={b}>
                                        <BoxShadowStyled>
                                            {b}
                                        </BoxShadowStyled>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }

                </div>
            </div>
        </DetailsPageStyled>
    );
};

export default DetailsPage;
