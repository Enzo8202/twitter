import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#F7F9F9',
    },
    header: {
        padding: 18,
        backgroundColor: 'red',
        display: 'flex'
    },
    headerTitle: {
        fontSize: '1.2rem',
        fontWeight: 600,
        marginRight: '0.5rem',
    },
    divider: {
        backgroundColor: '#7EBAFF',
        filter: 'opacity(0.18)'
    },
    newTweet: {
        padding: 18,
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba( 255, 255, 255, 0.25 )',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.18)',

    },
    tweetItem: {
        padding: 18,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '0.5rem',
        "&:hover": {
            backgroundColor: '#F7F7F7'
        }
    },
    profile: {
        height: 60,
        width: 60,
        borderRadius: '50%'
    },
    tweetContainer: {
        flex: 1,
        marginRight: '1rem'
    },
    input: {
        marginRight: '1rem',
        border: 'none',
        flex: 1,
        fontWeight: 400,
        "&:focus": {
            outline: 'unset',
        },
        caretColor: 'cornflowerblue',
        background: 'transparent',
    },
    newTweetBtn: {
        color: "white !important",
        borderRadius: "1rem !important",
        minHeight: "30px !important",
        height: "30px !important",
        fontFamily: "shabnam !important",
        lineHeight: "1rem !important",
        minWidth: "5rem !important"
    },
    retweetGrid:{
        marginTop: 16,
        alignItems: 'center'
    },
    newTweetImgBtn: {
        padding: "0.2rem !important",
        marginLeft: "1rem",
        marginRight: "-1rem",
        width: "32px",
        height: "32px"
    },
    newTweetLike: {
        padding: "0.2rem !important",
        marginLeft: "1rem",
        width: "40px",
        height: "32px",
        overflow: 'hidden'
    },
    likeCount: {
        fontSize: '0.8rem',
        color: theme.palette.text.hint,
        marginLeft: '-1rem',
    },
    tweetItemName: {
        fontSize: "1.2rem",
        marginTop: '0.5rem'
    },
    tweetItemId: {
        fontSize: '0.9rem',
        color: theme.palette.text.hint,
        marginRight: '0.5rem',
        marginTop: '0.75rem',
    },
    tweetText: {
        fontSize: '1rem',

    },
    tweetImg: {
        width: '100%', height: 'auto',
        marginTop: '1rem',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',

    }
}));


export default useStyles;