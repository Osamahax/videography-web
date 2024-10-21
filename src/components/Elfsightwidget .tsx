"use client"
// components/ElfsightWidget.tsx
import { useEffect } from 'react';

interface ElfsightWidgetProps {
  widgetId: string;
}

const ElfsightWidget: React.FC<ElfsightWidgetProps> = ({ widgetId }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://apps.elfsight.com/p/platform.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className={`elfsight-app-${widgetId}`}></div>;
};

export default ElfsightWidget;

