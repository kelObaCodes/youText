"use client";
import React from "react";

type tooltipData = {
    toolTipData: React.ReactElement;
};

export default function ToolTip({ toolTipData }: tooltipData) {
    return (
        <>
            <div className="create-you-text-area">
                <div className="tooltip">{toolTipData}</div>
            </div>
        </>
    );
}
