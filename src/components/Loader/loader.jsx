import React from "react";
import { useLoading, TailSpin, Audio } from "@agney/react-loading";

export default function Loader(props) {
  const { containerProps, indicatorEl } = useLoading({
    loading: props.isLoading,
    indicator: <TailSpin width="200" />
  });
  
  return (
    <div className="loader">
      <section {...containerProps}>
        {indicatorEl} {/* renders only while loading */}
      </section>
    </div>
  );
}