import React from "react";
import { useLoading, Bars } from "@agney/react-loading";

export default function LoaderEmail(props) {
    const { containerProps, indicatorEl } = useLoading({
      loading: props.isLoading,
      loaderProps: {
        valueText: 'Enviando email, por favor aguarde!',
      },
      indicator: <Bars width="100" />
    });
    
    return (
      <div className="loader">
        <section {...containerProps}>
            
          {indicatorEl} {/* renders only while loading */}
        </section>
        <div className={props.isLoading ? 'naomostraemail' : ''}>
        {props.children}
        </div>
      </div>
    );
  }