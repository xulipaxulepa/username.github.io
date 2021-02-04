import React from 'react'
import Grid from '../template/grid'
import './comicBook.css'

export default props => (
    <Grid cols='12 4' >
    			<div id="bk-list" className="bk-list clearfix">
					<li>
						<div className="bk-book book-1 bk-bookdefault">
							<div className="bk-front">
								<div className="bk-cover-back"></div>
								<div className="bk-cover" style={{backgroundImage: 'url('+props.comicCover+')'}}>
                                    <h2>
										<span>{props.title}</span>
										<span>{props.title}</span>
									</h2>
                                    {props.children}
								</div>
							</div>
							<div className="bk-left" style={{backgroundImage: 'url('+props.comicCover+')'}}>
							</div>
							<div className="bk-top"></div>
							<div className="bk-bottom"></div>
                            
						</div>
					</li>
</div>
</Grid>
)