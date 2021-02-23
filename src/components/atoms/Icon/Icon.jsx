import { useRef, useEffect, useState } from 'react';
const Icon = ({ folder, name, ...rest }) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {

        const { default: reactComp } = await import(
          `!!@svgr/webpack?-svgo,+titleProp,+ref!../../../assets/icons/${folder}/${name}.svg`
        );

        ImportedIconRef.current = reactComp;
      } catch (err) {
        // Your own error handling logic, throwing error for the sake of
        // simplicity
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [folder, name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon {...rest} />;
  }

  return null;
};
export default Icon;
