'use client';

import ResultsCell from './ResultsCell';

export default function ResultsList(props) {
    return (
        <div>
            {props.requests && props.requests.length > 0 ? (
                props.requests.map((item, index) => {
                    return (
                        <ResultsCell
                            key={index}
                            id={item.id}
                            image_url={item.image_url}
                            image_height={item.image_height}
                            image_width={item.image_width}
                            name={item.name}
                            artist={item.artist}
                            preview_url={item.preview_url}
                            url={item.url}
                        />
                    );
                })
            ) : (
                <></>
            )}
        </div>
    );
}
