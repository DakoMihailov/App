import { makeStyles } from 'tss-react/mui';

const styles = makeStyles()(() => ({
	root: {
		width: '100%',
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundPosition: '50%',
		backgroundRepeat: 'no-repeat',
		backgrounSize: 'cover',
		overflow: 'hidden',
		backgroundImage: 'url("./background.jpg")',
	},
	loginFrame: {
		width: '50%',
		minWidth: '420px',
		maxWidth: '936px',
		height: 'auto',
		display: 'flex',
		position: 'relative',
	},
	leftFrame: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		position: 'relative',
		justifyContent: 'center',
		backgroundColor: '#252525',
		borderRadius: '4px 0 0 4px',
		width: '50%',
		height: 'auto',
		minHeight: '50vh',
		transition: 'all .25s ease-out',
	},
	imgCont: {
		width: '250px',
		minWidth: '200px',
		marginBottom: '2vh',
		marginTop: '8vh',
	},
	img1: {
		width: '100%',
		height: 'auto',
	},
	textHld: {
		width: '70%',
		color: '#fff',
		textAlign: 'center',
		bottom: '13vh',
		left: '13%',
	},
	majorCap: {
		fontSize: '16px',
		marginBottom: '2vh',
	},
	minorText: {
		fontSize: '14px',
		lineHeight: '1.4',
		marginBottom: '12vh',
	},
	rightFrame: {
		width: '50%',
		height: 'auto',
		minHeight: '50vh',
		transition: 'all .25s ease-out',
		position: 'relative',
		backgroundColor: '#fff',
		borderRadius: '0 4px 4px 0',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	topHld: {
		margin: '0 auto',
		maxWidth: '400px',
		padding: '6vh 10% 4vh',
	},
	actionTitle: {
		textAlign: 'center',
		marginTop: '6vh',
		fontSize: '15px',
	},
	img2: {
		width: '150px',
		maxWidth: '180px',
		height: 'auto',
	},
	proText: {
		marginTop: '1vh',
		animation: 'TextOutAnimation .25s ease-out',
		opacity: '1',
	},
	btnGroup: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '2vh',
		flexDirection: 'column',
	},
	btn: {
		marginTop: '10px',
		width: '100%',
	},
	signForm: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
	},
	footer: {
		backgroundColor: 'rgba(37,37,37,.9)',
		borderRadius: '0 0 4px 0',
		display: 'flex',
		justifyContent: 'center',
		gap: '15px',
		position: 'absolute',
		bottom: '0px',
		height: '4vh',
		alignItems: 'center',
	},
}));

export default styles;
