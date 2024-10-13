import { useEffect } from "react";

const useDisableScrollRestoration = () => {
	useEffect(() => {
		// Disable the browser's default scroll restoration
		if ("scrollRestoration" in window.history) {
			window.history.scrollRestoration = "manual";
		}

		// Scroll to the top
		window.scrollTo(0, 0);

		// Re-enable scroll restoration when the component unmounts
		return () => {
			if ("scrollRestoration" in window.history) {
				window.history.scrollRestoration = "auto";
			}
		};
	}, []);
};

export default useDisableScrollRestoration;
