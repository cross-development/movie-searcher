//Core
import React from 'react';
import PropTypes from 'prop-types';
//Data
//TODO: заменить на реальные данные
import chatData from 'data/chatData.json';
//Styles
import styles from './ChatRooms.module.css';

const ChatRooms = ({ isAuthenticated }) => {
	return (
		<div className={styles.chatsWrapper}>
			<div className={styles.chatRooms}>
				<div className={styles.titleWrapper}>
					<h3 className={styles.title}>ChatRooms</h3>
					<button className={styles.button} type="submit">
						Create Room
					</button>
				</div>
				<ul className={styles.chats}>
					{chatData.map(({ poster, chatRoom, members, isPrivate, status }) => (
						<li key={poster} className={styles.chatItem}>
							<img src={poster} alt={chatRoom} />
							<div className={styles.movieInfo}>
								<div className={styles.chatTitleWrapper}>
									<h4 className={styles.chatTitle}>Room #{chatRoom}</h4>
									<button className={styles.button} type="submit">
										Join
									</button>
								</div>
								<p className={styles.movieTitle}>Movie {chatRoom}</p>
								<p className={styles.memberCount}>Active Members: {members.length}</p>
								<p className={isPrivate ? styles.private : styles.public}>{status}</p>
								<ul className={styles.members}>
									{members.map(
										({ img, isOnline, room }) =>
											chatRoom === room && (
												<li key={img} className={styles.membersItem}>
													<img src={img} alt={room} className={styles.memberImg} />
													<span className={isOnline ? styles.online : styles.offline}></span>
												</li>
											),
									)}
								</ul>
							</div>
						</li>
					))}
				</ul>
				<p>dfsdf</p>
			</div>
		</div>
	);
};

ChatRooms.propTypes = {
	isAuthenticated: PropTypes.string,
};

ChatRooms.defaultProps = {
	isAuthenticated: null,
};

export default ChatRooms;
