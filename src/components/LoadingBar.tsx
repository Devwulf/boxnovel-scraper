import React from "react";

export type LoadingBarProps = {
    currentItems: number;
    totalItems: number;
}

export type LoadingBarState = {

}

export default class LoadingBar extends React.Component<LoadingBarProps, LoadingBarState> {
    render() {
        const { currentItems, totalItems } = this.props;

        console.log(totalItems);
        return(
            <div className="w-full bg-gray-400">
                <div className="h-6 bg-blue-500" style={{width: `${(currentItems / totalItems) * 100}%`}}></div>
                <div className="flex justify-center items-center" style={{marginTop: "-1.5rem"}}>
                    <span className="font-medium mr-2">{`${currentItems}/${totalItems}`}</span>
                    <span>{`${(currentItems / totalItems) * 100}%`}</span>
                </div>
            </div>
        );
    }
}