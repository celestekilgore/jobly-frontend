import { Oval } from 'react-loader-spinner';
import "./LoadingSpinner.css";

function LoadingSpinner() {
  return (
  <div className="LoadingSpinner">
    < Oval
      height={80}
      width={80}
      color="#ADD8E6"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#001861"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  </div>
  );
}

export default LoadingSpinner;